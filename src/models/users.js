export const defaultUser = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    roles: [],
};

export const usersDescription = {
    id: {
        descriptionFieldType: 'textField',
        editableField: false,
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'id',
    },
    firstName: {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'First name',
    },
    lastName: {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'Last Name',
    },
    email: {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'Email',
    },
    username: {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'Username',
    },
    password: {
        descriptionFieldType: 'textField',
        showInTable: false,
        flexValues: {
            xs12: true,
        },
        label: 'Password',
        type: 'password'
    },
    roles: {
        descriptionFieldType: 'selectField',
        convertFunction: (prop) => {
            return prop.map(role => role.roleName).join(', ')
        },
        flexValues: {
            xs12: true,
        },
        itemText: "roleName",
        itemValue: "id",
        multiple: true,
        returnObject: true,
        label: "Roles",
        urlToGetSelectables: 'roles',
    }
};
