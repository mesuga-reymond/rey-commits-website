/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React from 'react';
import { Container } from 'react-bootstrap';
import AIimage from "../comp-images/DE_classic.jpg";
import webdev from "../comp-images/DA_classic.jpg";
import ML from "../comp-images/AI_classic.jpg";

function Home() {
  const blogs = [
    {
      title: "Anomaly Detection in Raw Survey Data: An Interpretable Approach Using K-Means Clustering on World Values Survey Wave 7",
      author: "by R. Mesuga",
      date: "Oct 2025",
      image: "https://lh6.googleusercontent.com/proxy/ihZSAHtUkT-no4nNa8OezJ6AHO8Doc55CVztJ-NSCdscH6PAK_VKTceW1Vkca-cPYAN04bzlwiGGtib0hILnbYVoQc3OW8Fd_AbyVzwqzq4kioQQcQqOQ6MHG9kg2w",
      text: "This study, presented at the 16th National Convention on Statistics, explores how K-Means clustering can be used to detect anomalies in large-scale survey data. It addresses the limitations of traditional rule-based methods by offering a more data-driven and scalable approach to identify unusual response patterns. The findings show that K-Means can enhance survey data quality checks by uncovering hidden irregularities linked to specific attitudes and demographics in an objective and interpretable way.",
      link: "#",
    },
    {
      title: "Investigation on the Effects of Digital Radiographic Image Qualities on the Performance of Convolutional Neural Networks (CNNs) for COVID-19 Likelihood Prediction",
      author: "by R. Mesuga, et al.",
      date: "2021",
      image: "./studyImages/covid-xray-manipulation.jpg",
      text: "This academic research aims to investigate the effects of image quality on the accuracy of CNN to predict the possible existence of Covid-19 virus on x-ray images. This will be observed by manipulating images at different image quality distortions. The outcomes of this study may give insights to improve both medical imaging technologies and deep learning algorithms.",
      link: "https://ejournals.ph/article.php?id=22389",
    },
    {
      title: "A Deep Transfer Learning Approach on Identifying Glitch Wave-form in Gravitational Wave Data",
      author: "by R. Mesuga, et al.",
      date: "2022",
      image: "./studyImages/black-hole-smush_600.gif",
      text: "This academic research aims to compare different state-of-the-art CNN architectures to classify glitches detected by LIGO. The outcomes of this research may give insights to improve current CNN models for future benefits of LIGO.",
      link: "https://arxiv.org/abs/2107.01863",
    },
    {
      title: "Lepton Flavour Violation Identification in Tau Decay Using Artificial Intelligence",
      author: "by R. Mesuga",
      date: "2022",
      image: "https://cdn.mos.cms.futurecdn.net/S9CJjb4E4dBKoAtfFxT3So.jpg",
      text: "This study explores how AI models—including XGBoost, LightGBM, and custom neural networks—can identify Lepton Flavour Violation (LFV) signals from combined LHCb and Monte Carlo data, addressing gaps in the Standard Model. Results show that XGBoost and a 10-layer Dense Block Neural Network achieved the best performance (AUC = 0.88), while LightGBM and deeper CNNs underperformed.",
      link: "https://arxiv.org/abs/2205.14828",
    },
  ];

  return (
    <div>
      <Container fluid>
        <section className="blog-feed-section">
          <h2 className="blog-feed-title">My Publications & Blog Feed</h2>
          <div className="blog-feed-grid">
            {blogs.map((post, index) => (
              <div className="blog-card" key={index}>
                <div className="blog-image-wrapper">
                  <img src={post.image} alt={post.title} className="blog-card-img" />
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-author">{post.author}</p>
                  <p className="blog-card-date">{post.date}</p>
                  <p className="blog-card-text">{post.text}</p>
                  <a 
                    href={post.link} 
                    className="blog-read-more" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    Read More →
                    </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}

export default Home;
