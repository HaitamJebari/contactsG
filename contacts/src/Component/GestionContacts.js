import React, { useState } from 'react';
import './GestionContacts.css'
function ContactForm() {
  const [contacts, setContacts] = useState([]); 
  const [newContact, setNewContact] = useState({});
  const [search, setSearch] = useState(''); 
  const [filtreContacts, setFiltreContacts] = useState([]); 
  const [sortAsc, setSortAsc] = useState(true); 

  
  const Submit = (e) => {
    e.preventDefault();
    setContacts([...contacts, newContact]); 
    setNewContact({}); 
    setFiltreContacts([...contacts, newContact]); 
  }


  const Change = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  }
  

  const Search = (e) => {
    setSearch(e.target.value);
    setFiltreContacts(contacts.filter
      (contact =>
        contact.ville.toLowerCase().includes(e.target.value.toLowerCase())
      ));
    }
    
 
  const Delete = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
    setFiltreContacts(updatedContacts);
  }

  const Sort = () => {
    setSortAsc(!sortAsc);
    const sortedContacts = [...contacts].sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return sortAsc ? -1 : 1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return sortAsc ? 1 : -1;
      }
      return 0;
    });
    setContacts(sortedContacts);
    setFiltreContacts(sortedContacts);
  }
  

  return (
    <div>
      
      <div id='contacts'>
      
      <h1>Contacts</h1>
      <div className='comp1 '>


          <input type="text" name="search" className='ch' placeholder="Rechercher..." onChange={Search} value={search} />    
          <button type="button" className='Trier' onClick={Sort}>Trier</button>
        
        
        <br /><br />
      </div>
        
     
       
      
      <form onSubmit={Submit} className="form2" >
        <input
         type="text"
         name="name"
         className='nom' 
         placeholder="Nom" 
         onChange={Change} 
         value={newContact.name } />
        <input 
        type="text" 
        name="ville" 
        className='ville' 
        placeholder="Ville" 
        onChange={Change} 
        value={newContact.ville } />
        <input 
        type="tel" 
        name="phone" 
        className='tel' 
        placeholder="Téléphone" 
        onChange={Change} 
        value={newContact.phone } />
        <button 
        type="submit" 
        className='aj'
        >Ajouter</button>
         </form>
         </div>
      <div className='rr'>
        {filtreContacts.length > 0
          ? filtreContacts.map((contact, index) => (
            <ul style={{listStyleType:"none"}} key={index}>
              <li className='list' >
                <table  border="1">
                  <th style={{width:"33%"}}>Nom</th>
                  <th style={{width:"33%"}}>Ville</th>
                  <th style={{width:"33%"}}>Telephone</th>
                <tr>
                  <td >{contact.name}</td>
                  <td>{contact.ville}</td>
                  <td>{contact.phone}</td>
                
                <td style={{width:"100%",textAlign:"end"}}>  
                <button 
                type="button" 
                onClick={() => Delete(index)} 
                className='sup'>Supprimer</button>
                </td>
                </tr> 
                </table>
                
              </li>

            </ul>
          ))
          : contacts.map((contact, index) => (
            <ul style={{listStyleType:"none"}} key={index}>
              <li className='list'>
              <table  border="1">
                  <th style={{width:"33%"}}>Nom</th>
                  <th style={{width:"33%"}}>Ville</th>
                  <th style={{width:"33%"}}>Telephone</th>
                <tr>
                  <td>{contact.name}</td>
                  <td>{contact.ville}</td>
                  <td>{contact.phone}</td>
                
                <td>  
                <button 
                type="button"
                id='butt' 
                onClick={() => Delete(index)} 
                className='sup'
                style={{textAlign:"center",paddinRight: "2px"}}>Supprimer</button>
                
                </td>
                </tr> 
                </table>
              </li>
            </ul>
          ))
          
        }
      </div>
      
    </div>
  );
}

export default ContactForm;