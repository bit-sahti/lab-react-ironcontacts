import './ContactList.css';

import Contact from '../Contact/Contact';

const ContactList = props => {
    const getClassName = index => index === props.children.length - 1 ? 'lastContact' : null;
    console.log('rendering list')
    return (
        <table>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
            </tr>
            {
                props.children.map((contact, i) => {
                    return (
                        <Contact className={getClassName(i)} delete={props.delete}>{contact}</Contact>
                    )
                })
            }
        </table>
    )
}

export default ContactList;