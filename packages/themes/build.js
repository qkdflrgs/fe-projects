import run from "@litae/esbuild-config";
import pkg from "./package.json" assert { type: "json" };

run({ pkg });
