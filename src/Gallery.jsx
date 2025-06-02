import { motion } from 'framer-motion';

function Gallery({ photos, onPhotoClick }) {
  return (
    <section>
      {/* Gallery title */}
      <h2 className="text-3xl font-handwritten text-center text-earth-light mb-6">
        Gallery
      </h2>

      {/* Container for the photo grid with responsive columns */}
      <section className="columns-1 sm:columns-2 md:columns-3 gap-4 p-6">
        {/* Map through the photos array to render each photo */}
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="mb-4 overflow-hidden rounded-lg cursor-pointer relative group"
            // Animate scale up slightly on hover
            whileHover={{ scale: 1.03 }}
            // Animate opacity and position on initial render into viewport
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} // Animate only once per photo
            // Delay each photo animation slightly based on its index
            transition={{ duration: 0.6, delay: index * 0.1 }}
            // Call the onPhotoClick handler when photo is clicked, passing the index
            onClick={() => onPhotoClick(index)}
          >
            {/* Photo image */}
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full rounded shadow-lg"
            />
            {/* Overlay with caption shown on hover */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <p className="text-white font-handwritten text-lg">{photo.alt}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </section>
  );
}

export default Gallery;
