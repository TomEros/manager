import React from 'react';
import { OsdsLink, OsdsText } from '@ovhcloud/ods-components/react';
import { ODS_TEXT_LEVEL, ODS_TEXT_SIZE } from '@ovhcloud/ods-components/';
import { useNavigate } from 'react-router-dom';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { RancherCellData } from './Table.type';
import './Table.scss';
import { ResourceStatus } from '@/api/api.type';

export default function LinkService({ cell, row }: Readonly<RancherCellData>) {
  const navigate = useNavigate();
  const label = cell.renderValue();
  const path = row.original.id;
  const isReady = row.original.resourceStatus === ResourceStatus.READY;
  return (
    <OsdsText
      color={ODS_THEME_COLOR_INTENT.text}
      level={ODS_TEXT_LEVEL.body}
      size={ODS_TEXT_SIZE._400}
    >
      <OsdsLink
        color={ODS_THEME_COLOR_INTENT.primary}
        onClick={() => {
          if (isReady) {
            navigate(path);
          }
        }}
        className="overflow-hidden text-ellipsis max-w-[200px]"
        disabled={!isReady || null}
      >
        {label as string}
      </OsdsLink>
    </OsdsText>
  );
}
