type UploadType = 'plugin' | 'flash'

interface FileIF {
  fileName: string,
  fileSize: number
}

interface UploadIF {
  uploadType: UploadType,
  fileName: string,
  fileSize: number,

  init(): void,

  setFile(file: FileIF): void
}

class Upload implements UploadIF {
  uploadType: UploadType
  fileName: string
  fileSize: number

  constructor(uploadType: UploadType) {
    this.uploadType = uploadType
  }

  init() {
    const self = this
    const dom = document.createElement('div')
    dom.setAttribute('data-fileName', this.fileName)
    dom.setAttribute('data-fileSize', String(this.fileSize))
    dom.innerHTML =
      `<span>文件名称: ${this.fileName}, 文件大小: ${this.fileSize}</span>
      <button class="delFile">删除</button>`
    const delFile = dom.querySelector('.delFile') as HTMLElement
    delFile.onclick = function() {
      self.delFile(delFile.parentNode as HTMLDivElement)
    }
    document.body.appendChild(dom)
  }

  delFile(dom: HTMLDivElement) {
    const fileName = dom.getAttribute('data-fileName')
    const fileSize = parseInt(dom.getAttribute('data-fileSize'))
    if (fileSize < 3000) {
      return dom.parentNode.removeChild(dom)
    }
    if (window.confirm('确定要删除该文件吗? ' + fileName)) {
      return dom.parentNode.removeChild(dom)
    }
  }

  setFile(file: FileIF) {
    const { fileName, fileSize } = file
    this.fileName = fileName
    this.fileSize = fileSize
  }
}


class UploadFactory {
  private static createdFlyWeightObjs: object = {}

  static create(uploadType: UploadType): UploadIF {
    if (this.createdFlyWeightObjs[uploadType]) {
      return this.createdFlyWeightObjs[uploadType]
    }
    return this.createdFlyWeightObjs[uploadType] = new Upload(uploadType)
  }
}


const startUpload = function(uploadType: UploadType, files: FileIF[]) {
  for (let file of files) {
    const upload = UploadFactory.create(uploadType)
    upload.setFile(file)
    upload.init()
  }
}

startUpload('plugin', [
  {
    fileName: '1.txt',
    fileSize: 1000
  },
  {
    fileName: '2.html',
    fileSize: 3000
  },
  {
    fileName: '3.txt',
    fileSize: 5000
  }
])

startUpload('flash', [
  {
    fileName: '4.txt',
    fileSize: 1000
  },
  {
    fileName: '5.html',
    fileSize: 3000
  },
  {
    fileName: '6.txt',
    fileSize: 5000
  }]
)
