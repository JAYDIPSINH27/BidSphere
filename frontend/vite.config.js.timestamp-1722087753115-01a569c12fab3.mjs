// vite.config.js
import { defineConfig } from "file:///D:/Dalhousie%20University%20MACS/Summer%202024%20T2/5709%20Web/Gitlab/csci-5709-grp-14/frontend/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Dalhousie%20University%20MACS/Summer%202024%20T2/5709%20Web/Gitlab/csci-5709-grp-14/frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
import eslint from "file:///D:/Dalhousie%20University%20MACS/Summer%202024%20T2/5709%20Web/Gitlab/csci-5709-grp-14/frontend/node_modules/vite-plugin-eslint/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "D:\\Dalhousie University MACS\\Summer 2024 T2\\5709 Web\\Gitlab\\csci-5709-grp-14\\frontend";
var vite_config_default = defineConfig({
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "index.html"
    }
  },
  define: {
    global: "window"
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: []
  },
  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        ".js": "jsx"
      }
    }
  },
  plugins: [react(), eslint()],
  server: {
    host: "0.0.0.0"
  },
  test: {
    globals: true
  },
  resolve: {
    alias: {
      "@components": path.resolve(__vite_injected_original_dirname, "./src/components"),
      "@core": path.resolve(__vite_injected_original_dirname, "./src/core"),
      "@shared": path.resolve(__vite_injected_original_dirname, "./src/shared"),
      "@atoms": path.resolve(__vite_injected_original_dirname, "./src/components/atoms"),
      "@molecules": path.resolve(__vite_injected_original_dirname, "./src/components/molecules"),
      "@organisms": path.resolve(__vite_injected_original_dirname, "./src/components/organisms"),
      "@pages": path.resolve(__vite_injected_original_dirname, "./src/components/pages"),
      "@templates": path.resolve(__vite_injected_original_dirname, "./src/components/templates"),
      "@utils": path.resolve(__vite_injected_original_dirname, "./src/components/utils")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxEYWxob3VzaWUgVW5pdmVyc2l0eSBNQUNTXFxcXFN1bW1lciAyMDI0IFQyXFxcXDU3MDkgV2ViXFxcXEdpdGxhYlxcXFxjc2NpLTU3MDktZ3JwLTE0XFxcXGZyb250ZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxEYWxob3VzaWUgVW5pdmVyc2l0eSBNQUNTXFxcXFN1bW1lciAyMDI0IFQyXFxcXDU3MDkgV2ViXFxcXEdpdGxhYlxcXFxjc2NpLTU3MDktZ3JwLTE0XFxcXGZyb250ZW5kXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9EYWxob3VzaWUlMjBVbml2ZXJzaXR5JTIwTUFDUy9TdW1tZXIlMjAyMDI0JTIwVDIvNTcwOSUyMFdlYi9HaXRsYWIvY3NjaS01NzA5LWdycC0xNC9mcm9udGVuZC92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xyXG5pbXBvcnQgZXNsaW50IGZyb20gJ3ZpdGUtcGx1Z2luLWVzbGludCc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBidWlsZDoge1xyXG4gICAgb3V0RGlyOiAnZGlzdCcsXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGlucHV0OiAnaW5kZXguaHRtbCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZGVmaW5lOiB7XHJcbiAgICBnbG9iYWw6ICd3aW5kb3cnLFxyXG4gIH0sXHJcbiAgZXNidWlsZDoge1xyXG4gICAgbG9hZGVyOiAnanN4JyxcclxuICAgIGluY2x1ZGU6IC9zcmNcXC8uKlxcLmpzeD8kLyxcclxuICAgIGV4Y2x1ZGU6IFtdLFxyXG4gIH0sXHJcbiAgb3B0aW1pemVEZXBzOiB7XHJcbiAgICBmb3JjZTogdHJ1ZSxcclxuICAgIGVzYnVpbGRPcHRpb25zOiB7XHJcbiAgICAgIGxvYWRlcjoge1xyXG4gICAgICAgICcuanMnOiAnanN4JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbcmVhY3QoKSwgZXNsaW50KCldLFxyXG4gIHNlcnZlcjoge1xyXG4gICAgaG9zdDogJzAuMC4wLjAnLFxyXG4gIH0sXHJcbiAgdGVzdDoge1xyXG4gICAgZ2xvYmFsczogdHJ1ZSxcclxuICB9LFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAY29tcG9uZW50cyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9jb21wb25lbnRzJyksXHJcbiAgICAgICdAY29yZSc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9jb3JlJyksXHJcbiAgICAgICdAc2hhcmVkJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL3NoYXJlZCcpLFxyXG4gICAgICAnQGF0b21zJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2NvbXBvbmVudHMvYXRvbXMnKSxcclxuICAgICAgJ0Btb2xlY3VsZXMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMnKSxcclxuICAgICAgJ0BvcmdhbmlzbXMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMnKSxcclxuICAgICAgJ0BwYWdlcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9jb21wb25lbnRzL3BhZ2VzJyksXHJcbiAgICAgICdAdGVtcGxhdGVzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzJyksXHJcbiAgICAgICdAdXRpbHMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvY29tcG9uZW50cy91dGlscycpLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5YyxTQUFTLG9CQUFvQjtBQUN0ZSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sVUFBVTtBQUhqQixJQUFNLG1DQUFtQztBQUt6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYixPQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLFFBQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxRQUFRO0FBQUEsSUFDUixTQUFTO0FBQUEsSUFDVCxTQUFTLENBQUM7QUFBQSxFQUNaO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWixPQUFPO0FBQUEsSUFDUCxnQkFBZ0I7QUFBQSxNQUNkLFFBQVE7QUFBQSxRQUNOLE9BQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO0FBQUEsRUFDM0IsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLFNBQVM7QUFBQSxFQUNYO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxlQUFlLEtBQUssUUFBUSxrQ0FBVyxrQkFBa0I7QUFBQSxNQUN6RCxTQUFTLEtBQUssUUFBUSxrQ0FBVyxZQUFZO0FBQUEsTUFDN0MsV0FBVyxLQUFLLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ2pELFVBQVUsS0FBSyxRQUFRLGtDQUFXLHdCQUF3QjtBQUFBLE1BQzFELGNBQWMsS0FBSyxRQUFRLGtDQUFXLDRCQUE0QjtBQUFBLE1BQ2xFLGNBQWMsS0FBSyxRQUFRLGtDQUFXLDRCQUE0QjtBQUFBLE1BQ2xFLFVBQVUsS0FBSyxRQUFRLGtDQUFXLHdCQUF3QjtBQUFBLE1BQzFELGNBQWMsS0FBSyxRQUFRLGtDQUFXLDRCQUE0QjtBQUFBLE1BQ2xFLFVBQVUsS0FBSyxRQUFRLGtDQUFXLHdCQUF3QjtBQUFBLElBQzVEO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
