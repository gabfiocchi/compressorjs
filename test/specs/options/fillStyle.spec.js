describe('fillStyle', () => {
  it('should be `transparent` by default', (done) => {
    window.loadImageAsBlob('/base/docs/images/transparent.png', (image) => {
      const compressor = new Compressor(image);

      expect(compressor.options.fillStyle).to.equal('transparent');
      done();
    });
  });

  it('should match the given mime type', (done) => {
    window.loadImageAsBlob('/base/docs/images/transparent.png', (image) => {
      image.name = 'transparent.png';

      const mimeType = 'image/png';
      const fillStyle = '#007bff';
      const compressor = new Compressor(image, {
        mimeType,
        fillStyle,
        success(result) {
          expect(result.type).to.equal(mimeType);
          done();
        },
      });

      expect(compressor.options.mimeType).to.equal(mimeType);
      expect(compressor.options.fillStyle).to.equal(fillStyle);
    });
  });
});
