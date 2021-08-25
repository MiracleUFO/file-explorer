
const Folders = [
    {
        name: 'Folder One',
        content: {
            files: ['Resume.pdf', 'Meme.jpeg', 'Lord of the Flies.pdf'],
            folders: [
                {
                   name: 'Pictures',
                   content: {
                       files: ['Me on a good day.png']
                   },
                   type: 'folder'
                }
            ]
        },
        type: 'folder'
    },
    {
        name: 'Folder Two',
        content: {files:['A mule and an ice cream.pdf', 'Under Control.jpeg', 'Tempest.pdf']},
        type: 'folder'
    },
    {
        name: 'Folder Three',
        content: {files:['The Ghost of Christmas Past.pdf', 'REAMDE.md', 'Tempest.pdf']},
        type: 'folder'
    },
    {
        name: 'Folder Four',
        content: {files:['The Ghost of Christmas Past.pdf', 'REAMDE.md', 'Tempest.pdf']},
        type: 'folder'
    },
    {
        name: 'Folder Five',
        content: {files:['The Ghost of Christmas Past.pdf', 'REAMDE.md', 'Tempest.pdf']},
        type: 'folder'
    }
]


export default Folders;