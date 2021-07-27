class AddContact{
    constructor(name, address, phone, email, photo){
        this.name = name
        this.address = address
        this.phone = phone
        this.email = email 
        this.photo = photo
    }
    add(){
        let contacts = localStorage.getItem('contactList')
        let item = {
            'name' : this.name,
            'address' : this.address,
            'phone' : this.phone,
            'email' : this.email,
            'photo' : this.photo
        }
        if(contacts){
            contacts = JSON.parse(contacts)
            contacts.push(item)
            item = contacts
            item = JSON.stringify(item)
        }
        else{
            item = JSON.stringify([item])
        }
        localStorage.setItem('contactList', item)
    }

}
//class ContactItem{

//}

let Mike = new AddContact('Mike Anamendolla', '5842 Hillcrest Rd', '(870) 288-4149', 'mike.ana@example.com')
Mike.add()