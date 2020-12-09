import React from 'react';
import styled from '@emotion/styled';
import debounce from 'lodash/debounce';
import * as queryString from 'query-string';

import {addSuccessMessage} from 'app/actionCreators/indicator';
import {ModalRenderProps} from 'app/actionCreators/modal';
import AbstractExternalIssueForm from 'app/components/externalIssues/abstractExternalIssueForm';
import ExternalLink from 'app/components/links/externalLink';
import {t, tct} from 'app/locale';
import space from 'app/styles/space';
import {IssueConfigField, Organization} from 'app/types';
import {IssueAlertRuleAction, IssueAlertRuleCondition} from 'app/types/alerts';
import AsyncView from 'app/views/asyncView';
import Form from 'app/views/settings/components/forms/form';
import {FormField} from 'app/views/settings/projectAlerts/issueEditor/ruleNode';

type Props = ModalRenderProps & {
  formFields: {[key: string]: any};
  index: number;
  instance: IssueAlertRuleAction | IssueAlertRuleCondition;
  link?: string;
  onSubmitAction: (
    data: {[key: string]: string},
    dynamicFieldChoices: {[key: string]: string[]}
  ) => void;
  onPropertyChange: (rowIndex: number, name: string, value: string) => void;
  organization: Organization;
  ticketType?: string;
} & AbstractExternalIssueForm['props'];

type State = {
  dynamicFieldChoices: {[key: string]: string[]};
} & AbstractExternalIssueForm['state'];

class TicketRuleModal extends AbstractExternalIssueForm<Props, State> {
  constructor(props: Props, context: any) {
    super(props, context);
  }

  getDefaultState(): State {
    return {
      ...super.getDefaultState(),
      dynamicFieldValues: {},
      dynamicFieldChoices: {},
    };
  }

  getEndpoints(): ReturnType<AsyncView['getEndpoints']> {
    const {instance, organization} = this.props;
    return [
      [
        'integrationDetails',
        `/organizations/${organization.slug}/integrations/${instance.integration}/?action=create`,
      ],
    ];
  }

  getNames = (): string[] => {
    const {formFields} = this.props;

    const names: string[] = [];
    for (const name in formFields) {
      if (formFields[name].hasOwnProperty('name')) {
        names.push(formFields[name].name);
      }
    }
    return names;
  };

  getEndPointString = () => {
    const {instance, organization} = this.props;
    return `/organizations/${organization.slug}/integrations/${instance.integration}/`;
  };

  cleanData = (data: {
    [key: string]: string;
  }): {
    integration?: string | number;
    [key: string]: any;
  } => {
    const {instance} = this.props;
    const names: string[] = this.getNames();
    const formData: {
      integration?: string | number;
      [key: string]: any;
    } = {};
    if (instance?.hasOwnProperty('integration')) {
      formData.integration = instance?.integration;
    }
    for (const [key, value] of Object.entries(data)) {
      if (names.includes(key)) {
        formData[key] = value;
      }
    }
    return formData;
  };

  onFormSubmit: Form['props']['onSubmit'] = (data, _success, _error, e) => {
    const {onSubmitAction, closeModal} = this.props;
    const {dynamicFieldChoices} = this.state;

    e.preventDefault();
    e.stopPropagation();

    const formData = this.cleanData(data);
    onSubmitAction(formData, dynamicFieldChoices);
    addSuccessMessage(t('Changes applied.'));
    closeModal();
  };

  debouncedOptionLoad = debounce(
    async (
      field: IssueConfigField,
      input: string,
      cb: (err: Error | null, result?: any) => void
    ) => {
      const options = this.props.instance;
      const query = queryString.stringify({
        project: options?.project,
        issuetype: options?.issuetype,
        field: field.name,
        query: input,
      });

      const url = field.url || '';
      const separator = url.includes('?') ? '&' : '?';
      // We can't use the API client here since the URL is not scoped under the
      // API endpoints (which the client prefixes)
      try {
        const response = await fetch(url + separator + query);
        cb(null, {options: response.ok ? await response.json() : []});
      } catch (err) {
        cb(err);
      }
    },
    200,
    {trailing: true}
  );

  getFormProps = (): Form['props'] => {
    const {closeModal} = this.props;

    return {
      ...this.getDefaultFormProps(),
      cancelLabel: t('Close'),
      onCancel: closeModal,
      onSubmit: this.onFormSubmit,
      submitLabel: t('Apply Changes'),
    };
  };

  getFieldProps = (field: IssueConfigField) =>
    field.url
      ? {
          loadOptions: (input: string) => this.getOptions(field, input),
          async: true,
          cache: false,
          onSelectResetsInput: false,
          onCloseResetsInput: false,
          onBlurResetsInput: false,
          autoload: true,
        }
      : {};

  addFields = (fields: FormField[]): void => {
    const title = {
      name: 'title',
      label: 'Title',
      type: 'string',
      default: 'This will be the same as the Sentry Issue.',
      disabled: true,
    };
    const description = {
      name: 'description',
      label: 'Description',
      type: 'string',
      default: 'This will be generated from the Sentry Issue details.',
      disabled: true,
    };
    fields.unshift(description);
    fields.unshift(title);
  };

  renderBodyText = () => {
    const {ticketType, link} = this.props;
    return (
      <BodyText>
        {t(
          'When this alert is triggered a %s will be created with the following fields. ',
          ticketType
        )}
        {tct("It'll also [linkToDocs] with the new Sentry Issue.", {
          linkToDocs: <ExternalLink href={link}>{t('stay in sync')}</ExternalLink>,
        })}
      </BodyText>
    );
  };

  render() {
    const {formFields, instance} = this.props;
    const fields = Object.values(formFields);
    this.addFields(fields);
    const initialData = instance || {};
    fields.forEach((field: FormField) => {
      // passing an empty array breaks multi select
      // TODO(jess): figure out why this is breaking and fix
      if (!initialData.hasOwnProperty(field.name)) {
        initialData[field.name] = field.multiple ? '' : field.default;
      }
    });

    return this.renderForm(fields, instance);
  }
}

const BodyText = styled('div')`
  margin-bottom: ${space(3)};
`;

export default TicketRuleModal;
