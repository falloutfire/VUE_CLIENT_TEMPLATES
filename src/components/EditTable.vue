<template>
    <v-dialog v-model="isOpen" max-width="500px" persistent>
        <v-card>
            <v-card-title>
                <span class="headline mt-2 ml-2">{{ itemName }}</span>
            </v-card-title>

            <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>

                        <v-flex v-bind="descr['flexValues']" v-for="[key, descr] in fields" :key="key">
                            <template v-if="descr['descriptionFieldType'] === 'textField'">
                                <template v-if="key.indexOf('.') === -1">
                                    <v-text-field
                                            v-if="descr['objectKeyField'] === undefined"
                                            v-model="value[key]"
                                            v-bind="descr"
                                    ></v-text-field>
                                    <v-text-field
                                            v-else
                                            v-model="value[key][descr['objectKeyField']]"
                                            v-bind="descr"
                                    ></v-text-field>
                                </template>
                                <template v-else>
                                    <v-text-field
                                            v-if="descr['objectKeyField'] === undefined"
                                            v-model="value[key.split('.')[0]][key.split('.')[1]]"
                                            v-bind="descr"
                                    ></v-text-field>
                                    <v-text-field
                                            v-else
                                            v-model="value[key][descr['objectKeyField']]"
                                            v-bind="descr"
                                    ></v-text-field>
                                </template>
                            </template>
                            <v-text-field
                                    v-if="descr['descriptionFieldType'] === 'dateField'"
                                    v-model="value[key]"
                                    v-bind="descr"
                            ></v-text-field>
                            <v-select
                                    v-if="descr['descriptionFieldType'] === 'selectField'"
                                    v-model="value[key]"
                                    v-bind="descr"
                                    :items="items[key]"
                            ></v-select>
                            <v-checkbox
                                    v-if="descr['descriptionFieldType'] === 'checkBox'"
                                    v-model="value[key]"
                                    v-bind="descr"
                            ></v-checkbox>

                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click="$emit('close')">Cancel</v-btn>
                <v-btn color="blue darken-1" :loading="saveLoading" flat @click="$emit('apply')">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import HTTP from "@/http";

    export default {
        name: "EditTable",
        props: {
            value: Object,
            fieldsDescription: Object,
            isOpen: Boolean,
            saveLoading: Boolean,
            itemName: String,
        },
        data() {
            return {
                items: {},
            }
        },
        methods: {
            async retrieveSelectable(fields) {
                fields.filter(([, descr]) => {
                    return descr['descriptionFieldType'] === 'selectField';
                }).forEach(([key, descr]) => {
                    HTTP.get(descr['urlToGetSelectables']).then(response => {
                        this.items[key] = response.data.result
                    })
                })
            },
            parseDate(key) {
                return new Date(key).toISOString().substr(0, 10)
            }
        },
        computed: {
            fields() {
                const fields = Object.entries(this.fieldsDescription).filter(([, descr]) => {
                    return descr['editableField'] !== undefined ? descr['editableField'] : true;
                });
                fields.forEach(([key,]) => {
                    this.items[key] = [];
                });
                this.retrieveSelectable(fields);
                return fields;
            }
        },
    }
</script>

<style scoped>

</style>
