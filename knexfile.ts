import path from 'path';
module.exports = {
    client: 'sqlite3',
    connection:{
        // __dirname é uma variavel global que retonar para o caminho de quem está executando ele

        filename: path.resolve(__dirname, 'src', 'database','database.sqlite'),
    },
    migrations:{
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    }, 
    seeds:{
        directory:path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true,
};