import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';
import {CHATGPT, DEEPL, GITHUB} from "@/constants";

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: 'Rwear',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'DeepL',
          title: 'DeepL',
          href: DEEPL,
          blankTarget: true,
        },
        {
          key: 'chatGPT',
          title: 'chatGPT',
          href: CHATGPT,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> GitHub</>,
          href: GITHUB,
          blankTarget: true,
        },

      ]}
    />
  );
};

export default Footer;
