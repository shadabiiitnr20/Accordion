## Accordion using ReactJS and TailwindCSS

# Logic
const toggle = (item_id) => {
    if(selected_item === item_id) {
        return setSelected_item(null)
    }
    setSelected_item(item_id)
}

- use Selected_item === item_Id to conditionally render
- use diplay block and display hidden to show the dropdown
