// postbuild.js
if (!process.env.VERCEL) {
  // Run react-snap only if not on Vercel
  const { execSync } = require('child_process');
  try {
    execSync('npx react-snap', { stdio: 'inherit' });
  } catch (error) {
    console.error('react-snap failed:', error);
    process.exit(1);
  }
} else {
  console.log('Skipping react-snap on Vercel');
}
