'use client';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

export default function LandingPage({ setIsLandingPage }) {
  const navigate = useNavigate();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-sky-100 text-gray-900 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 md:px-12 bg-white/70 backdrop-blur-md shadow-sm border-b border-white/40 rounded-b-2xl">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-3xl font-extrabold tracking-wide text-blue-700"
        >
          💸 Trackify
        </motion.h1>
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="space-x-6 text-gray-700 font-medium hidden md:block"
        >
          <a href="#features" className="hover:underline">Features</a>
          <a href="#about" className="hover:underline">About</a>
          <Link
            to="/test/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 transition"
          >
            Sign In
          </Link>
        </motion.nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-20 py-20 gap-10">
        <motion.div
          className="lg:w-1/2"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-5xl font-black leading-tight mb-6 text-blue-700">
            Take Control of Your Money 💰
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-xl">
            Trackify helps you budget smarter, spend better, and save more. Visualize your income and expenses in real-time and build financial habits that stick.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetStarted}
            className="bg-blue-600 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-md hover:bg-blue-700 transition"
          >
            Get Started Free 🚀
          </motion.button>
        </motion.div>

        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          
        </motion.div>
      </main>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 px-6 md:px-20 bg-white text-gray-900 rounded-t-3xl mt-16"
      >
        <motion.h3
          className="text-4xl font-bold text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Why People Love Trackify 💙
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: '💳',
              title: 'Track Income & Expenses',
              desc: 'Easily track your daily income and expenses with detailed categories.',
            },
            {
              icon: '📊',
              title: 'Analyze Spending Patterns',
              desc: 'Visualize your spending with intuitive graphs and detailed reports.',
            },
            {
              icon: '📅',
              title: 'Monthly Summary',
              desc: 'View your monthly summary with income vs expenses to stay on track.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              custom={i + 1}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-sky-50 border border-sky-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold mb-2 text-blue-600">{item.title}</h4>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center text-sm py-6 mt-10 rounded-t-2xl">
        © {new Date().getFullYear()} Trackify — Built to Simplify Your Finances
      </footer>
    </div>
  );
}
