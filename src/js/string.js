function handleString(str, firstCamelCase, reverse) {
    let strArr = reverse ? str.split("").reverse() : str.split("")
    let result = []

    function handleLoop(arr) {
        if (arr.length) {

            let newStr = ""
            arr.forEach((item, index) => {
                let even = index % 2

                if (firstCamelCase) {

                    if (!even) {
                        item = item.toUpperCase()
                    } else {
                        item = item.toLowerCase()
                    }

                } else {
                    if (even) {
                        item = item.toUpperCase()
                    }
                }

                newStr = newStr + item
            })

            result.push(newStr)

            strArr.pop()

            handleLoop(strArr)
        }

        return result
    }

    return handleLoop(strArr)
}

const result = handleString("nepal", false)

console.log(result)