<template>
    <div class="container bg-blacktext-white text-2xl">
        <table>
            <thead>
                <th v-text="'From'"/>
                <th style="width: 27%;" v-text="'To'"/>
                <th v-text="'Subject'">
                <th
                    @click="handleSort(messageList,'date')" :class="this.sortBy === 'date' ? 'sort--active cursor-pointer' : 'cursor-pointer'">
                    <div class="flex items-center gap-1">
                        <span v-text="'Date'"/>
                        <Icon name="caret" class="caret h-1.5"/>
                    </div>
                </th>
            </thead>
            <tbody>
                <tr v-for="(message,index) in messageList">
                    <td v-text="message.from"></td>
                    <td>
                        <div class="flex justify-between items-start pr-4">
                            <div class="flex">
                                <span v-text="message.to"/>
                                <span v-if="message.to.length > 1" v-text="', ...'"/>
                            </div>
                            <span v-if="message.to.length > 1" class="badge" v-text="'+' + (message.to.length - 1)"></span>
                        </div>
                    </td>
                    <td v-text="message.sub"></td>
                    <td v-text="message.date" :class="this.sortBy === 'date' ? 'sort--active' : ''"></td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
    import Header      from "./Header"
    import Icon        from "./Icon"
    import messageList from "./script"
    import SortIcon    from "./SortIcon"

    export default {
        name: "Content",
        components: { Header, Icon, SortIcon },
        data() {
            return {
                messageList: [],
                sortOrder: "asc",
                sortBy: "date",
            }
        },
        mounted() {
            this.messageList = [...messageList]
            this.handleSort(messageList, "date")
        },
        methods: {
            handleSort: function(arr, sortBy) {
                arr = [...arr]

                let sortedArr = []

                this.sortBy = sortBy

                if (this.sortOrder === "dsc") {
                    // making in asc
                    sortedArr = arr.sort((a, b) => {
                        if (a[this.sortBy] > b[this.sortBy]) {
                            return 1
                        }
                        if (a[this.sortBy] < b[this.sortBy]) {
                            return -1
                        }
                        return 0
                    })

                }

                if (this.sortOrder === "asc") {
                    // making in dsc
                    sortedArr = arr.sort((a, b) => {
                        console.log(a, b)

                        if (a[this.sortBy] > b[this.sortBy]) {
                            return -1
                        }
                        if (a[this.sortBy] < b[this.sortBy]) {
                            return 1
                        }
                        return 0
                    })
                }

                this.messageList = [...sortedArr]
                this.sortOrder === "asc" ? this.sortOrder = "dsc" : this.sortOrder = "asc"
            },

            handleCopy(index) {
                console.log("copying", index)
            },
        },
    }
</script>
