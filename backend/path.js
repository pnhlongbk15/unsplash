
const src = {
        folder_api: 'api',
        folder_configs: 'configs'
}
const api = {
        folder_routes: 'routes',
        folder_models: 'models',
        folder_controllers: 'controllers',
        folder_views: 'views'
}

global.__path_src = __dirname + '/src';

global.__path_api = __path_src + '/' + src.folder_api;
        global.__path_views = __path_api + '/' + api.folder_views;
        