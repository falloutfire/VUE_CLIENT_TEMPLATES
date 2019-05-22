export const defaultTemplate = {
    id: "",
    colorScheme: "",
    name: "",
    device: "",
    film: "",
    luminophore: "",
    color: ""
};

export const templateDescription = {
    id: {
        descriptionFieldType: 'textField',
        editableField: false,
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'id',
    },
    colorScheme: {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'colorScheme',
    },
    name: {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'name',
    },
    device: {
        descriptionFieldType: 'selectField',
        urlToGetSelectables: 'bd_template/device',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        objectKeyField: 'name',
        convertFunction: (prop) => {
            return prop.name
        },
        itemText: "name",
        itemValue: "id",
        returnObject: true,
        label: 'device',
    },
    film: {
        descriptionFieldType: 'selectField',
        urlToGetSelectables: 'bd_template/film',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        objectKeyField: 'name',
        convertFunction: (prop) => {
            return prop.name
        },
        itemText: "name",
        itemValue: "id",
        returnObject: true,
        label: 'film',
    },
    luminophore: {
        descriptionFieldType: 'selectField',
        urlToGetSelectables: 'bd_template/luminophore',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        objectKeyField: 'name',
        itemText: "name",
        itemValue: "id",
        convertFunction: (prop) => {
            return prop.name
        },
        returnObject: true,
        label: 'luminophore',
    },
    color: {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'color',
    },
};
