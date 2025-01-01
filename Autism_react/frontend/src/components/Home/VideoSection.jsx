function VideoSection() {
  return (
    <>
      <div className="video-section">
        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JYPeOm5A8XQ?si=-dhOYGIrUY5-LVA7"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-info">
          <h2 className="video-heading">
            Helping Parents and Therapists Cope with Autism Spectrum Disorder
          </h2>

          <p className="video-description">
            Dr. Susan P. Sherkow is a practicing child, adolescent, and adult
            psychiatrist trained at Tufts University School of Medicine, Albert
            Einstein College of Medicine, and the New York Psychoanalytic
            Institute. She is currently the Director of The Sherkow Center for
            Child Development and Autism Spectrum Disorder.
          </p>

          <a href="#" className="video-transcription">
            Video Transcription
          </a>
        </div>
      </div>
    </>
  );
}

export default VideoSection;
