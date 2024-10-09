import React from 'react';
import { Metadata } from 'next';

import { Catalog } from '@/screens';
import { ICatalogPageProps } from '@/types/catalog';
import { catalogAPI, selectionsAPI } from '@/services/api';
import { parseCatalogSearchParams } from '@/functions/parseCatalogSearchParams';
import { MAIN_META } from '@/constants/meta';

export const revalidate = 24 * 60 * 60;

export const generateMetadata = async ({ params }: ICatalogPageProps) => {
    try {
        const { selection_id } = params;
        if (!selection_id) {
            throw new Error();
        }

        const {
            data: { selections },
        } = await selectionsAPI.getSelections();
        const foundSelection = selections.find((item) => item.id === +selection_id);

        if (!foundSelection) {
            throw new Error();
        }

        return {
            title: `${foundSelection.title} на ресейл платформе THE CULTT.`,
            description: foundSelection.description,
        } satisfies Metadata;
    } catch (e) {
        return MAIN_META;
    }
};

const SelectionPage = async (props: ICatalogPageProps) => {
    try {
        const { data } = await catalogAPI.getCatalog(parseCatalogSearchParams(props));

        let mainTitle: string | undefined;
        const selectionId = props.params.selection_id;

        if (selectionId) {
            try {
                const {
                    data: { selections },
                } = await selectionsAPI.getSelections();
                const foundSelection = selections.find((item) => item.id === +selectionId);
                mainTitle = foundSelection?.title ?? '';
            } catch (e) {
                mainTitle = 'Подборки';
            }
        }

        return <Catalog serverCatalogData={data} mainTitle={mainTitle} />;
    } catch (e) {
        return <Catalog />;
    }
};

export default SelectionPage;
