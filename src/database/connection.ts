import kenx from 'knex';

import path from 'path';
// a função path ela é responsavel por fazer a união de caminhos

const connection = kenx({
    client: 'sqlite3',
    connection:{
        // __dirname é uma variavel global que retonar para o caminho de quem está executando ele

        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true,
});

export default connection;  