const yargs = require('yargs');

// * To show all yargs command we created we use --help flag

// * We can also define version of the app to show up in CLI 
// * { For working of this it should be on top of console.log(yargs.argv); or yargs.parse() }
yargs.version('1.2.1');

// * Creation of Command


yargs.command({
    command:"remove",
    description:"Remove a new note",
    handler: ()=>{
        console.log("Removing note");
    }
})

yargs.command({
    command:"list",
    description:"List notes",
    handler: ()=>{
        console.log("Listing notes");
    }
})

// * Adding -options in our command using builder

yargs.command({
    command:"add",
    builder:{
        title:{ // name of the option as key
            describe:"Add title of the note",
            demandOption: true, // Is option is required or not

            // if we havent provide ant value to title ( ... add --title ) then it will take title value as
            // true but we dont want that, thats why we use 'type' property to define the datatype of title

            type:'string' // Data type of the option 
            // TODO Remember: string is written in all lowercase inside single quotes not like String (without quoutes).
        },
        body:{
            describe:"Add body of the Note",
            demandOption: true,
            type:'string'  
        }
    },
    description:"Add a new note",
    handler: (argv)=>{
        console.log("Adding Title:",argv.title);
        console.log("Adding Body:",argv.body);
    }
})



yargs.parse(); // * it dosen't  need any argument...So use it instead of console.log(yargs.argv); 

// console.log(yargs.argv); 

