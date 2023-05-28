import Accordion from "../elements/Accordion";


/**
 * Expandable List with toggle button actions.
 * */
function AccordionPage() {

    const items = [
        {
            'id':'werwcw',
            'label': 'Lorem ipsum dolor sit amet ',
            'content': 'consectetur adipiscing elit. Mauris sit amet dapibus lectus, ut posuere nisi. Sed erat turpis, convallis quis nunc et, placerat porta ligula.'
        },
        {
            'id':'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'label': 'Lorem Ipsum',
            'content': 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,'
        }
    ]

    return (
        <Accordion items={items}/>
    )

}

export default AccordionPage;