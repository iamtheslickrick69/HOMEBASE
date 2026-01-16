"use client"

import { X, ExternalLink, FileText, BookOpen, Database, Building2, Scale } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AtlasSource } from "@/lib/atlas-config"

interface AtlasSourcesModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  sources: AtlasSource[]
}

const SOURCE_ICONS = {
  research: FileText,
  guidelines: BookOpen,
  internal: Database,
  manufacturer: Building2,
  legal: Scale
}

const SOURCE_COLORS = {
  research: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  guidelines: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  internal: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  manufacturer: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  legal: "bg-red-500/10 text-red-400 border-red-500/20"
}

export function AtlasSourcesModal({ open, onOpenChange, sources }: AtlasSourcesModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] bg-neutral-900 border-neutral-800">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <BookOpen className="h-5 w-5 text-blue-400" />
            Atlas Sources
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-4">
            {sources.length === 0 ? (
              <div className="text-center py-8 text-neutral-400">
                No sources available for this response.
              </div>
            ) : (
              sources.map((source, index) => {
                const Icon = SOURCE_ICONS[source.type]
                const colorClass = SOURCE_COLORS[source.type]

                return (
                  <div
                    key={source.id}
                    className="border border-neutral-800 rounded-lg p-4 hover:border-neutral-700 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2 flex-1">
                        <div className={`p-1.5 rounded-md border ${colorClass}`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-neutral-100 mb-1">
                            {index + 1}. {source.title}
                          </h4>
                          <Badge variant="outline" className={`text-xs ${colorClass} border`}>
                            {source.type.charAt(0).toUpperCase() + source.type.slice(1)}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-neutral-400 mb-3 ml-9">
                      {source.description}
                    </p>

                    {source.authors && (
                      <p className="text-xs text-neutral-500 ml-9 mb-1">
                        <span className="font-medium">Authors:</span> {source.authors}
                      </p>
                    )}

                    {source.journal && source.year && (
                      <p className="text-xs text-neutral-500 ml-9 mb-2">
                        <span className="font-medium">Published:</span> {source.journal}, {source.year}
                      </p>
                    )}

                    {source.internal && (
                      <p className="text-xs text-violet-400 ml-9 mb-2 flex items-center gap-1">
                        <Database className="h-3 w-3" />
                        Internal Homebase Data
                      </p>
                    )}

                    {source.url && !source.internal && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="ml-9 mt-2 text-xs h-7 border-neutral-700 hover:border-blue-500 hover:text-blue-400"
                        onClick={() => window.open(source.url, '_blank')}
                      >
                        View Full Source
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </Button>
                    )}
                  </div>
                )
              })
            )}
          </div>
        </ScrollArea>

        <div className="flex justify-between items-center pt-4 border-t border-neutral-800">
          <p className="text-xs text-neutral-500">
            Atlas AI backs every response with verified sources
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onOpenChange(false)}
            className="border-neutral-700"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
