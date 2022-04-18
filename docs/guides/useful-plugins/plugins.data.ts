import fs from "fs";
import path from "path";
import yaml from "yaml";

interface Plugin {
  name: string;
  author: string;
  download: string;
  description: string;
  tags?: string[];
}

export declare const data: Record<string, Plugin[]>;

export default {
  watch: "./**",
  async load() {
    const configPath = path.resolve(__dirname, "plugins.data.yaml");
    const configData = fs.readFileSync(configPath, "utf-8");

    return yaml.parse(configData);
  },
};
