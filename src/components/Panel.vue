<template>
    <v-app>
        <v-layout row wrap>
            <v-toolbar dark color="primary" app>
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <v-toolbar-title class="headline text-uppercase">
                    <span>KLEKNER </span>
                    <span class="font-weight-light">ADMIN PANEL</span>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn @click="$store.dispatch('clearTokens').then(() => $router.push({name: 'login'}))" flat>LOG OUT</v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-navigation-drawer v-model="drawer"
                                 absolute
                                 temporary width="350">
                <v-toolbar light>
                    <v-list>
                        <v-list-tile-title class="title ml-3">
                            MENU
                        </v-list-tile-title>
                    </v-list>
                </v-toolbar>
                <v-divider></v-divider>
                <v-list dense class="pt-0">
                    <v-list-tile v-for="item in items"
                                 :key="item.title"
                                 @click="setCurrentTable(item.table)">
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>

            <v-flex v-if="currentTable" xs12 class="pt-5">
                <crud-table
                        :key="currentTable.tableName"
                        v-bind="currentTable"
                ></crud-table>
            </v-flex>
        </v-layout>
    </v-app>
</template>

<script>
    // import HelloWorld from './components/HelloWorld'
    import CrudTable from '@/components/CrudTable'
    import lodash from 'lodash';

    import {defaultUser, usersDescription} from "@/models/users";
    import {defaultOs, osDescription} from "@/models/os";
    import {defaultDevice, deviceDescription} from "@/models/devices";
    import {chemicalTypeDescription, defaultChemicalType} from "@/models/chemicalTypes";
    import {defaultFilm, filmDescription} from "@/models/films";
    import {defaultLuminophore, luminophoreDescription} from "@/models/luminophore";
    import {defaultTemplate, templateDescription} from "@/models/templates";


    export default {
        name: 'Panel',
        components: {
            CrudTable
        },
        data() {
            return {
                drawer: null,
                currentTableName: null,
                tables: {
                    'UserTable': {
                        tableName: 'User',
                        crudURL: 'users',
                        itemsDescription: lodash.cloneDeep(usersDescription),
                        defaultItem: lodash.cloneDeep(defaultUser),
                        filterName: 'username'
                    },
                    'OSTable': {
                        tableName: 'Operation Systems',
                        crudURL: 'bd_template/os',
                        itemsDescription: lodash.cloneDeep(osDescription),
                        defaultItem: lodash.cloneDeep(defaultOs),
                        filterName: 'name'
                    },
                    'DeviceTable': {
                        tableName: 'Device',
                        crudURL: 'bd_template/device',
                        itemsDescription: lodash.cloneDeep(deviceDescription),
                        defaultItem: lodash.cloneDeep(defaultDevice),
                        filterName: 'name'
                    },
                    'ChemicalTypesTable': {
                        tableName: 'ChemicalType',
                        crudURL: 'bd_template/chemical_types',
                        itemsDescription: lodash.cloneDeep(chemicalTypeDescription),
                        defaultItem: lodash.cloneDeep(defaultChemicalType),
                        filterName: 'type'
                    },
                    'FilmsTable': {
                        tableName: 'Film',
                        crudURL: 'bd_template/film',
                        itemsDescription: lodash.cloneDeep(filmDescription),
                        defaultItem: lodash.cloneDeep(defaultFilm),
                        filterName: 'name'
                    },
                    'LuminophoreTable': {
                        tableName: 'Luminophore',
                        crudURL: 'bd_template/luminophore',
                        itemsDescription: lodash.cloneDeep(luminophoreDescription),
                        defaultItem: lodash.cloneDeep(defaultLuminophore),
                        filterName: 'name'
                    },
                    'TemplatesTable': {
                        tableName: 'Template',
                        crudURL: 'bd_template/template',
                        itemsDescription: lodash.cloneDeep(templateDescription),
                        defaultItem: lodash.cloneDeep(defaultTemplate),
                        filterName: 'name'
                    },
                },
                items: [
                    {
                        title: 'Users',
                        table: 'UserTable',
                    },
                    {
                        title: 'Operational systems',
                        table: 'OSTable',
                    },
                    {
                        title: 'Devices',
                        table: 'DeviceTable',
                    },
                    {
                        title: 'ChemicalTypes',
                        table: 'ChemicalTypesTable',
                    },
                    {
                        title: 'Films',
                        table: 'FilmsTable',
                    },
                    {
                        title: 'Luminophore',
                        table: 'LuminophoreTable',
                    },
                    {
                        title: 'Templates',
                        table: 'TemplatesTable',
                    },

                ],
            }
        },
        methods: {
            setCurrentTable(tableName) {
                this.drawer = !this.drawer;
                this.currentTableName = tableName;
            }
        },
        computed: {
            currentTable() {
                return this.currentTableName ? this.tables[this.currentTableName] : null
            },
            table() {
                return this.currentTableName ? CrudTable : null
            }
        }
    }
</script>
