import { Injectable } from '@nestjs/common';
import {
  emailVerificationEmailTemplate,
  tempPasswordEmailTemplate,
} from '.';

const templates = {
  'verify-email': emailVerificationEmailTemplate,
  'temp-password': tempPasswordEmailTemplate,
} as const;

@Injectable()
export class TemplateService {
  getTemplate(templateName: keyof typeof templates) {
    const template = templates[templateName];
    if (template) {
      return template;
    }
    return null;
  }

  replaceTemplatePlaceholders(
    template: string,
    placeholders: Record<string, string>,
  ) {
    return Object.keys(placeholders).reduce(
      (acc, key) =>
        acc.replace(new RegExp(`{{${key}}}`, 'g'), placeholders[key]),
      template,
    );
  }

  getTemplateAndReplacePlaceholders<
    T extends keyof typeof templates = keyof typeof templates,
  >(templateName: T, placeholders: (typeof templates)[T]['placeholders']) {
    const template = this.getTemplate(templateName);
    if (!template) {
      throw new Error(`Template ${templateName} not found`);
    }
    const html = this.replaceTemplatePlaceholders(template.html!, placeholders);
    return html;
  }
}
