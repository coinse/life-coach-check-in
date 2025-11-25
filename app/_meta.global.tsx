import {MetaRecord} from "nextra";

const DOCS_ITEMS: MetaRecord = {
    '---description': {
        type: 'separator',
        title: '연구 설명문 확인'
    },
    index: '',
    description_2_target: '',
    description_3_method: '',
    description_4_side_effects: '',
    description_5_benefit: '',
    description_6_privacy: '',
    description_7_compensation: '',
    description_8_disadvantage: '',
    description_9_assignment: '',
    description_10_following: '',
    description_11_unverified: '',
    description_12_reward: '',
    description_13_inquiry: '',
    '---agreement': {
        type: 'separator',
        title: '연구 동의'
    },
    agreement_1: '',
    further_process: '',
}


export default {
    index: {
        type: 'page',
        theme: {
            layout: 'full',
            toc: false,
            timestamp: false,
        }
    },
    docs: {
        type: 'page',
        title: '연구 설명문 확인 및 동의',
        items: DOCS_ITEMS,
        theme: {
            timestamp: false,
            collapsed: true,
        }
    },
}