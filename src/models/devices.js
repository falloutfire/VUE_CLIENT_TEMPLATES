export const defaultDevice = {
    id: "",
    name: "",
    os: "",
    camDiafragma: 0.0,
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
        label: 'name',
    },
    os: {
        descriptionFieldType: 'textField',
        editableField: false,
        convertFunction: (prop) => {
            return `${prop.name} ${prop.version}`
        },
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'os',
    },
    'os.name': {
        descriptionFieldType: 'textField',
        label: 'os name',
        showInTable: false,
        flexValues: {
            xs12: true,
            sm6: true,
        },
    },
    'os.version': {
        descriptionFieldType: 'textField',
        label: 'os version',
        showInTable: false,
        flexValues: {
            xs12: true,
            sm6: true,
        },
    },
    camDiafragma: {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'camDiafragma',
    },
    mp: {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'mp',
    },
    focus: {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'focus',
    },
    stabilization: {
        descriptionFieldType: 'checkBox',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'stabilization',
    }
};
