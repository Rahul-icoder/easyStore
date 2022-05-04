# Not Write Code For LocalStorage

## This modules provide easy method for localStorage web api's to set, get, remove and clear.

```
npm install @coderrahul/easystore
```

### Set Data in localStorage

```
import {setToLocalStorage} from '@coderrahul/easystore'

const value = {
	name:'rahul',
	lastname:'kumar'
}

setToLocalStorage('fullname',value)
setToLocalStorage('key','john doe')
```

### Get Data from localStorage

```
import {getFromLocalStorage} from '@coderrahul/easystore'

let value1= getFromLocalStorage('fullname')
let obj = JSON.parse(value1)

let value2 = setToLocalStorage('key','john doe')
```

### Remove Data from localStorage

```
import {getFromLocalStorage} from '@coderrahul/easystore'

removeFromLocalStorage('fullname')
```

### Clear Data from localStorage

```
import {clearLocalStorage} from '@coderrahul/easystore'

clearLocalStorage()
```
