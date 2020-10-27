class FileProvider {
    name: String;
    constructor(name: string) {
        this.name = name || "Generic"
    }

    retrieveFiles(): Array<StoreFile> {
        return
    }

    retrieveFile(): StoreFile {
        return
    }

    deleteFile(): StoreFile {
        return
    }

    uploadFile(): StoreFile {
        return
    }

    moveFile(): StoreFile {
        return
    }

}

type Files = Array<StoreFolder | StoreFile>

interface StoreFolder extends StoreEntity {
    type: Type.Folder
}

interface StoreFile extends StoreEntity {
    type: Type.File
}

enum Shared { Public, Private }

enum Type { Folder, File } 

interface StoreEntity {
    id: String,
    url: String,
    name: String,
    path: String,
    parentFolder: StoreFolder,
    shared: Shared,
    type: Type,
    deleted: Boolean
}

