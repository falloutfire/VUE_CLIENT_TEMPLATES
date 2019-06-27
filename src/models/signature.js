export const defaultSignature = {
    id: "",
    description: "",
    date: "",
    signature: ""
};

export const signatureDescription = {
    id: {
        descriptionFieldType: 'textField',
        editableField: false,
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'id',
    },
    description: {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'Описание',
    },
    date: {
        descriptionFieldType: 'dateField',
        convertFunction: (prop) => {
            prop = new Date(prop).toISOString().substr(0, 10);
            return prop
        },
        flexValues: {
            xs12: true
        },
        label: 'Дата создания',
        readonly: true
    },
    signature: {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'signature',
        readonly: true
    }
};
