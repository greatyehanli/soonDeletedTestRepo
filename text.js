var merge = (arr1) => {asddasdadasadsasdadaadsadads
    let length = arr1.length
    let cutPoint = Math.floor(length/2)

    let rightArr = merge(arr1.splice(cutPoint, length))
    let leftArr = merge(arr1)

    if(arr1.length = 1){
        return arr1
    }

    let i = 0
    let temp = []
    while(rightArr > 0 && leftArr > 0){
        let min = Math.min(rightArr[0], leftArr[0])

        temp = [...temp, min]

        if(rightArr[i] === min){
            rightArr.shift()
        }else{
            leftArr.shift()
        }
        i++
    }
s
    let remainingArr = []
    if(rightArr.length === 0){
        remainingArr = leftArr
    }else{
        remainingArr = rightArr
    }

    while(remainingArr.length > 0){
        temp = [...temp, remainingArr.shift()]
    }
    return temp
}

let array = [3, 2, 4, 8, 1]

let sortedArr = merge(array)
