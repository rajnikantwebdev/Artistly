"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Camera, MapPin, DollarSign, Languages, Tag } from "lucide-react";


const formSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup
    .string()
    .min(20, "Bio must be at least 20 characters")
    .required("Bio is required"),
  category: yup.array().min(1, "Select at least one category"),
  languages: yup.array().min(1, "Select at least one language"),
  feeRange: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
  image: yup.mixed().nullable(),
});

const categories = ["Singers", "Dancers", "DJs", "Stand-Up Comedians"];
const languages = ["Hindi", "English", "Punjabi", "Tamil", "Bengali"];
const feeOptions = [
  "₹10,000 - ₹30,000",
  "₹30,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000+",
];

const ArtistForm = () => {
  const form = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: "",
      bio: "",
      category: [],
      languages: [],
      feeRange: "",
      location: "",
      image: null,
    },
  });

  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = form;

  const onSubmit = (data) => {
    const formData = {
      ...data,
      image: data.image?.[0]?.name || null,
    };
    console.log("Artist Submitted:", formData);
    alert("Artist onboarded! Check console for data.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12 px-4">
      <div className=" w-full md:max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Artist Onboarding
          </h1>
          <p className="text-lg text-gray-600">
            Join our platform and showcase your talent to the world
          </p>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl flex-col hover:scale-100">
          <CardHeader className="mb-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full">
            <CardTitle className="md:text-2xl text-lg font-semibold flex items-center gap-2">
              <User size={24} />
              Artist Profile Setup
            </CardTitle>
          </CardHeader>

          <CardContent className="md:p-8 px-0 space-y-4">
            <Form {...form}>
              {/* Name */}
              <FormField
                control={control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-semibold text-gray-700 flex items-center gap-2">
                      <User size={18} />
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your full name"
                        className="h-12 text-sm md:text-base border-2 text-gray-700 border-gray-200 focus:border-purple-500 rounded-lg"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Bio */}
              <FormField
                control={control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base md:text-lg font-semibold text-gray-700">
                      Bio
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about yourself, your experience, and what makes you unique"
                        rows={4}
                        className="border-2 text-sm md:text-base text-gray-700 border-gray-200 focus:border-purple-500 rounded-lg resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Category */}
              <FormItem>
                <FormLabel className="text-base font-semibold text-gray-700 flex items-center gap-2">
                  <Tag size={18} />
                  Category
                </FormLabel>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                  {categories.map((cat) => (
                    <label
                      key={cat}
                      className="flex items-center gap-1 md:gap-2 cursor-pointer hover:bg-white p-2 rounded transition-colors"
                    >
                      <Checkbox
                        checked={watch("category")?.includes(cat)}
                        onCheckedChange={(checked) => {
                          const current = watch("category") || [];
                          setValue(
                            "category",
                            checked
                              ? [...current, cat]
                              : current.filter((c) => c !== cat)
                          );
                        }}
                        className="bg-gray-500 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                      />
                      <span className="font-medium text-sm md:text-base text-gray-700">
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
                <p className="text-sm text-red-500 mt-1">
                  {errors.category?.message}
                </p>
              </FormItem>

              {/* Languages */}
              <FormItem>
                <FormLabel className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                  <Languages size={18} />
                  Languages
                </FormLabel>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                  {languages.map((lang) => (
                    <label
                      key={lang}
                      className="flex items-center md:gap-2 gap-1 cursor-pointer hover:bg-white p-2 rounded transition-colors"
                    >
                      <Checkbox
                        checked={watch("languages")?.includes(lang)}
                        onCheckedChange={(checked) => {
                          const current = watch("languages") || [];
                          setValue(
                            "languages",
                            checked
                              ? [...current, lang]
                              : current.filter((l) => l !== lang)
                          );
                        }}
                        className="bg-gray-500 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                      />
                      <span className="font-medium text-sm md:text-base text-gray-700">
                        {lang}
                      </span>
                    </label>
                  ))}
                </div>
                <p className="text-sm text-red-500 mt-1">
                  {errors.languages?.message}
                </p>
              </FormItem>

              {/* Fee Range */}
              <FormField
                control={control}
                name="feeRange"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                      <DollarSign size={18} />
                      Fee Range
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 border-2 text-gray-700 border-gray-200 focus:border-purple-500 rounded-lg">
                          <SelectValue placeholder="Select your fee range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-white">
                        {feeOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Location */}
              <FormField
                control={control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                      <MapPin size={18} />
                      Location
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. Mumbai, MH"
                        className="h-12 border-2 text-gray-700 border-gray-200 focus:border-purple-500 rounded-lg"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Profile Image */}
              <FormItem>
                <FormLabel className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                  <Camera size={18} />
                  Profile Image (Optional)
                </FormLabel>
                <FormControl>
                  <div className="border-2 text-gray-700 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors">
                    <Camera size={48} className="mx-auto text-gray-400 mb-4" />
                    <Input
                      type="file"
                      accept="image/*"
                      className="border-0 bg-transparent text-center file:mr-4 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                      {...register("image")}
                    />
                    <p className="text-sm text-gray-500 mt-2">
                      Upload a professional photo
                    </p>
                  </div>
                </FormControl>
              </FormItem>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  onClick={handleSubmit(onSubmit)}
                  className="w-full h-14 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
                >
                  Submit Artist Profile
                </Button>
              </div>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ArtistForm;
