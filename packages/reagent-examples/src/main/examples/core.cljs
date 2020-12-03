(ns examples.core
  (:require 
   [reagent.core :as r]
   [examples.map-array-to-elements :as mate]))

(def TableHeader (r/reactify-component mate/table-header))
