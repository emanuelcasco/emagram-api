export default {
  getImage () {
    return {
      id: 'c0ff1499-6a84-4588-a388-493d65ef5eb8',
      publicId: '1aTCPnhHEWyDqCaNkVWXte',
      userId: 'emagram',
      liked: false,
      likes: 0,
      src: 'http://emagram.test/1aTCPnhHEWyDqCaNkVWXte.jpg',
      description: '#awesome',
      tags: ['awesome'],
      createdAt: new Date().toString()
    }
  },
  getImages () {
    return [
      this.getImage(),
      this.getImage(),
      this.getImage()
    ]
  },
  getImagesByTag () {
    return [
      this.getImage(),
      this.getImage()
    ]
  },
  getUser () {
    return {
      id: '19ffd731-ade8-4da5-863c-9c72216b23b6',
      publicId: '4fo3Sd4tuWXByh7kEYHei6',
      name: 'Emanuel Casco',
      username: 'emanuelcasco',
      email: 'emanuel@gmail.com',
      password: 'em4gram',
      createdAt: new Date().toString()
    }
  }

}
