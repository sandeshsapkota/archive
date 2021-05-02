<template>
    <div class="container bg-black-100 text-white text-2xl">
        Sombar
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
                sortBy: "",
            }
        },
        mounted() {
            this.messageList = [...messageList]
            this.handleSort("date")
        },
        methods: {
            handleSort: function(arr, sortBy) {
                // const arr = [
                //     { name: "Sandesh", age: 25 },
                //     { name: "Ramila", age: 19 },
                //     { name: "Pritvi", age: 28 },
                // ]

                arr = [...arr]

                let sortedArr = []
                this.sortBy = sortBy

                if (this.sortOrder === "asc") {

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

                if (this.sortOrder === "dsc") {
                    sortedArr = arr.sort((a, b) => {
                        if (a[this.sortBy] > b[this.sortBy]) {
                            return -1
                        }
                        if (a[this.sortBy] < b[this.sortBy]) {
                            return 1
                        }
                        return 0
                    })

                }

                if (this.sortOrder === "asc") {
                    this.sortOrder = "dsc"
                } else {
                    this.sortOrder = "asc"
                }

            },

            handleCopy(index) {
                console.log("copying", index)
            },

            caretClass(sortBy) {
                let classes
                if (this.sortBy === sortBy) {
                    classes = "caret--active"
                }
                if (this.sortOrder === "dsc") {
                    classes = "caret--active caret--dsc"
                }
                return classes
            },
        },
    }
</script>

<style lang="scss">
    .c-table__th,
    .c-table__td {

        &:nth-child(1) {
            width: 20%;
        }

        &:nth-child(2) {
            width: 30%;
        }

        &:nth-child(3) {
            width: 35%;
        }

        &:nth-child(4) {
            width: 15%;
        }
    }
</style>
