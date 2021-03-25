const yargs = require("yargs");
const notes = require("./notes");

yargs.version("1.0");

yargs.command({
    command: "list",
    describe: "List all notes",
    handler: () => notes.listNotes(),
});

yargs.command({
    command: "read",
    describe: "Read a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string",
        },
    },
    handler: (argv) => notes.readNote(argv.title),
});

yargs.command({
    command: "modify",
    describe: "Modify a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string",
        },
        newTitle: {
            describe: "New note title",
            demandOption: true,
            type: "string",
        },
    },
    handler: (argv) => notes.modifyNote(argv.title, argv.newTitle),
});

yargs.command({
    command: "add",
    describe: "Add a new note",
    buider: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string",
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string",
        },
    },
    handler: (argv) => notes.addNote(argv.title, argv.body),
});

yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string",
        },
    },
    handler: (argv) => notes.removeNote(argv.title),
});

yargs.parse();
