export const defaultFilm = {
    id: "",
    name: "",
    color: "",
    chemicalType: "",
    lightPermeability: "",
    thickness: ""
};

export const filmDescription = {
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
    lightPermeability:  {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'Светопроницаемость',
    },
    thickness:  {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'Толщина',
        suffix: 'мм'
    },
    chemicalType:  {
        descriptionFieldType: 'selectField',
        urlToGetSelectables: 'bd_template/chemical_types',
        objectKeyField: 'type',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        convertFunction: (prop) => {
            return prop.type
        },
        itemText: "type",
        itemValue: "id",
        returnObject: true,
        label: 'Химический тип',
    },
};
