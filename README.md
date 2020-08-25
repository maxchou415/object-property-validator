# Object Property Validator

## Accept Property Checker
Define an array of accept elements, such as `['name', 'email']`, and send them to the
function - `accepted()`, and also send the object that you want to check, such as requesting body.

For example: 
```javascript
    const acceptedFields = ['name', 'email']
    try {
        accepted(acceptedFields, req.body)
    } catch (error) {
        return error
    }
```
This will returns a filtered object as you want.

## Require Property Checker
Define an array of require elements, such as `['name', 'email']`, and send them to the
function - `required()`, and also send the object that you want to check, such as requesting body.

For example: 
```javascript
    const requiredFields = ['name', 'email']
    try {
        required(requiredFields, req.body)
    } catch (error) {
        // It will also return detailed lost elements.
        return error
    }
```