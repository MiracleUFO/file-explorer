
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
        content: {files:['Resume.pdf', 'Meme.jpeg', 'Lord of the Flies.pdf']},
        type: 'folder'
    }
]


export default Folders;