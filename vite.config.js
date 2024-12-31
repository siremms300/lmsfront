// import path from "path";
// import react from "@vitejs/plugin-react";
// import { defineConfig } from "vite";

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
//   build: {
//     outDir: "dist", // Ensure the output directory is 'dist'
//     rollupOptions: {
//       output: {
//         manualChunks(id) {
//           if (id.includes("node_modules")) {
//             return id
//               .toString()
//               .split("node_modules/")[1]
//               .split("/")[0]
//               .toString();
//           }
//         },
//       },
//     },
//     chunkSizeWarningLimit: 1000, // Adjust chunk size limit to suppress warnings
//   },
// });










import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})