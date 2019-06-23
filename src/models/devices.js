export const defaultDevice = {
    id: "",
    name: "",
    //os: "",
    resolution: "",
    mp: 0,
    focus: 0.0,
    stabilization: false
};

export const deviceDescription = {
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
    },
    resolution: {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'Разрешение',
        suffix: 'px',
        mask: '####*####'
    },
    mp: {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'Камера',
        suffix: 'Мп',
        mask: '###'
    },
    focus: {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'Фокусное расстояние',
    },
    stabilization: {
        descriptionFieldType: 'checkBox',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'Наличие стабилизации',
    }
};
