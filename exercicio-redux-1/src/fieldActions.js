
export function changeValue(e){
    console.log('ChangeValue ', e.target.value );
    return {
        type: 'VALUE_CHANGED',
        payload: e.target.value
    }
}