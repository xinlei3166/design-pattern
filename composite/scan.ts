interface BaseFile {
  name: string,
  parent: BaseFile,
  files?: BaseFile[],

  add(file: BaseFile): void,

  scan(): void
}

class Folder implements BaseFile {
  name: string
  parent: BaseFile = null
  files: BaseFile[] = []

  constructor(name: string) {
    this.name = name
  }

  add(file: BaseFile) {
    file.parent = this
    this.files.push(file)
  }

  remove() {
    if (!this.parent) { // 根节点或者树外的游离节点
      return
    }
    for (let files = this.parent.files, l = files.length - 1; l >= 0; l--) {
      let file = files[l]
      if (file === this) {
        files.splice(l, 1)
      }
    }
  }

  scan() {
    console.log('开始扫描文件夹: ' + this.name)
    for (const file of this.files) {
      file.scan()
    }
  }
}

// @ts-ignore
class File1 implements BaseFile {
  name: string
  parent: BaseFile = null

  constructor(name: string) {
    this.name = name
  }

  add(file: BaseFile) {
    throw new Error('文件下面不能再添加文件')
  }

  remove() {
    if (!this.parent) { // 根节点或者树外的游离节点
      return
    }
    for (let files = this.parent.files, l = files.length - 1; l >= 0; l--) {
      let file = files[l]
      if (file === this) {
        files.splice(l, 1)
      }
    }
  }

  scan() {
    console.log('开始扫描文件: ' + this.name)
  }
}

const folder = new Folder('学习资料')
const folder1 = new Folder('JavaScript')
const folder2 = new Folder('jQuery')
const file1 = new File1('JavaScript 设计模式与开发实践')
const file2 = new File1('精通jQuery')
const file3 = new File1('重构与模式')
folder1.add(file1)
folder2.add(file2)
folder.add(folder1)
folder.add(folder2)
folder.add(file3)

const folder3 = new Folder('Nodejs')
const file4 = new File1('深入浅出Node.js')
folder3.add(file4)
const file5 = new File1('JavaScript 语言精髓与编程实践')

folder.add(folder3)
folder.add(file5)

folder1.remove()

folder.scan()
