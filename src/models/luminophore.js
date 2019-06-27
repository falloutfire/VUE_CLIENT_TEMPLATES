export const defaultLuminophore = {
    id: "",
    name: "",
    color: "",
    size: "",
    brightness: "",
    afterglow: "",
    activationTime: ""
};

export const luminophoreDescription = {
    id: {
        descriptionFieldType: 'textField',
        editableField: false,
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'id',
    },
    name: {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'Название',
        counter: '60',
        maxlength: '60'
    },
    color:  {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'Цвет',
        suffix: 'RGB',
        counter: '6',
        maxlength: '6'
    },
    size:  {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'Размер',
        suffix: 'мкм',
        counter: '60',
        maxlength: '60'
    },
    brightness:  {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'Яркость',
        suffix: '%',
        mask: '###'
    },
    afterglow:  {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'Время послесвечения',
        mask: '##',
        suffix: 'c'
    },
    activationTime:  {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'Время активации',
        mask: '##',
        suffix: 'c'
    },
};

