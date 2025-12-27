export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: '14.1'
  }
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          extensions?: Json
          operationName?: string
          query?: string
          variables?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      group_members: {
        Row: {
          accepted_at: string | null
          created_at: string | null
          group_id: string
          id: string
          invited_at: string | null
          status: Database['public']['Enums']['member_status'] | null
          student_id: string
          updated_at: string | null
        }
        Insert: {
          accepted_at?: string | null
          created_at?: string | null
          group_id: string
          id?: string
          invited_at?: string | null
          status?: Database['public']['Enums']['member_status'] | null
          student_id: string
          updated_at?: string | null
        }
        Update: {
          accepted_at?: string | null
          created_at?: string | null
          group_id?: string
          id?: string
          invited_at?: string | null
          status?: Database['public']['Enums']['member_status'] | null
          student_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'group_members_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'group_details_with_stats'
            referencedColumns: ['group_id']
          },
          {
            foreignKeyName: 'group_members_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'group_stats'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'group_members_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'groups'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'group_members_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'homework_list_with_files'
            referencedColumns: ['group_id']
          },
          {
            foreignKeyName: 'group_members_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'student_card_details'
            referencedColumns: ['group_id']
          },
          {
            foreignKeyName: 'group_members_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'group_members_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'student_card_details'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'group_members_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'student_list_with_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'group_members_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'student_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'group_members_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'tutor_dashboard_stats'
            referencedColumns: ['tutor_id']
          },
        ]
      }
      groups: {
        Row: {
          created_at: string | null
          default_lesson_price: number | null
          description: string | null
          id: string
          invite_token: string
          max_students: number | null
          name: string
          subject: string | null
          tutor_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          default_lesson_price?: number | null
          description?: string | null
          id?: string
          invite_token?: string
          max_students?: number | null
          name: string
          subject?: string | null
          tutor_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          default_lesson_price?: number | null
          description?: string | null
          id?: string
          invite_token?: string
          max_students?: number | null
          name?: string
          subject?: string | null
          tutor_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'groups_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'groups_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_card_details'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'groups_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_list_with_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'groups_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'groups_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'tutor_dashboard_stats'
            referencedColumns: ['tutor_id']
          },
        ]
      }
      homework: {
        Row: {
          completed_at: string | null
          created_at: string | null
          description: string
          due_date: string | null
          id: string
          is_completed: boolean | null
          lesson_id: string
          student_notes: string | null
          updated_at: string | null
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          description: string
          due_date?: string | null
          id?: string
          is_completed?: boolean | null
          lesson_id: string
          student_notes?: string | null
          updated_at?: string | null
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          description?: string
          due_date?: string | null
          id?: string
          is_completed?: boolean | null
          lesson_id?: string
          student_notes?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'homework_lesson_id_fkey'
            columns: ['lesson_id']
            isOneToOne: false
            referencedRelation: 'calendar_lessons'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'homework_lesson_id_fkey'
            columns: ['lesson_id']
            isOneToOne: false
            referencedRelation: 'homework_list_with_files'
            referencedColumns: ['lesson_id']
          },
          {
            foreignKeyName: 'homework_lesson_id_fkey'
            columns: ['lesson_id']
            isOneToOne: false
            referencedRelation: 'lesson_history'
            referencedColumns: ['lesson_id']
          },
          {
            foreignKeyName: 'homework_lesson_id_fkey'
            columns: ['lesson_id']
            isOneToOne: false
            referencedRelation: 'lessons'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'homework_lesson_id_fkey'
            columns: ['lesson_id']
            isOneToOne: false
            referencedRelation: 'upcoming_lessons_detailed'
            referencedColumns: ['lesson_id']
          },
        ]
      }
      homework_files: {
        Row: {
          file_name: string
          file_size: number
          file_type: string
          homework_id: string
          id: string
          storage_path: string
          uploaded_at: string | null
        }
        Insert: {
          file_name: string
          file_size: number
          file_type: string
          homework_id: string
          id?: string
          storage_path: string
          uploaded_at?: string | null
        }
        Update: {
          file_name?: string
          file_size?: number
          file_type?: string
          homework_id?: string
          id?: string
          storage_path?: string
          uploaded_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'homework_files_homework_id_fkey'
            columns: ['homework_id']
            isOneToOne: false
            referencedRelation: 'homework'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'homework_files_homework_id_fkey'
            columns: ['homework_id']
            isOneToOne: false
            referencedRelation: 'homework_list_with_files'
            referencedColumns: ['homework_id']
          },
          {
            foreignKeyName: 'homework_files_homework_id_fkey'
            columns: ['homework_id']
            isOneToOne: false
            referencedRelation: 'lesson_history'
            referencedColumns: ['homework_id']
          },
          {
            foreignKeyName: 'homework_files_homework_id_fkey'
            columns: ['homework_id']
            isOneToOne: false
            referencedRelation: 'upcoming_lessons_detailed'
            referencedColumns: ['homework_id']
          },
        ]
      }
      invitations: {
        Row: {
          accepted_at: string | null
          declined_at: string | null
          group_id: string
          id: string
          invited_at: string | null
          status: Database['public']['Enums']['member_status'] | null
          student_email: string | null
          student_id: string | null
        }
        Insert: {
          accepted_at?: string | null
          declined_at?: string | null
          group_id: string
          id?: string
          invited_at?: string | null
          status?: Database['public']['Enums']['member_status'] | null
          student_email?: string | null
          student_id?: string | null
        }
        Update: {
          accepted_at?: string | null
          declined_at?: string | null
          group_id?: string
          id?: string
          invited_at?: string | null
          status?: Database['public']['Enums']['member_status'] | null
          student_email?: string | null
          student_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'invitations_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'group_details_with_stats'
            referencedColumns: ['group_id']
          },
          {
            foreignKeyName: 'invitations_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'group_stats'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'invitations_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'groups'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'invitations_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'homework_list_with_files'
            referencedColumns: ['group_id']
          },
          {
            foreignKeyName: 'invitations_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'student_card_details'
            referencedColumns: ['group_id']
          },
          {
            foreignKeyName: 'invitations_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'invitations_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'student_card_details'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'invitations_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'student_list_with_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'invitations_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'student_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'invitations_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'tutor_dashboard_stats'
            referencedColumns: ['tutor_id']
          },
        ]
      }
      lessons: {
        Row: {
          created_at: string | null
          end_time: string
          group_id: string | null
          id: string
          lesson_status: Database['public']['Enums']['lesson_status'] | null
          notes: string | null
          payment_status: Database['public']['Enums']['payment_status'] | null
          price: number | null
          start_time: string
          student_id: string
          topic: string | null
          tutor_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          end_time: string
          group_id?: string | null
          id?: string
          lesson_status?: Database['public']['Enums']['lesson_status'] | null
          notes?: string | null
          payment_status?: Database['public']['Enums']['payment_status'] | null
          price?: number | null
          start_time: string
          student_id: string
          topic?: string | null
          tutor_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          end_time?: string
          group_id?: string | null
          id?: string
          lesson_status?: Database['public']['Enums']['lesson_status'] | null
          notes?: string | null
          payment_status?: Database['public']['Enums']['payment_status'] | null
          price?: number | null
          start_time?: string
          student_id?: string
          topic?: string | null
          tutor_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'lessons_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'group_details_with_stats'
            referencedColumns: ['group_id']
          },
          {
            foreignKeyName: 'lessons_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'group_stats'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lessons_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'groups'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lessons_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'homework_list_with_files'
            referencedColumns: ['group_id']
          },
          {
            foreignKeyName: 'lessons_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'student_card_details'
            referencedColumns: ['group_id']
          },
          {
            foreignKeyName: 'lessons_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lessons_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'student_card_details'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'student_list_with_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'student_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'tutor_dashboard_stats'
            referencedColumns: ['tutor_id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_card_details'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_list_with_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'tutor_dashboard_stats'
            referencedColumns: ['tutor_id']
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string | null
          full_name: string
          id: string
          phone: string | null
          primary_subject: string | null
          role: Database['public']['Enums']['user_role']
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          full_name: string
          id: string
          phone?: string | null
          primary_subject?: string | null
          role: Database['public']['Enums']['user_role']
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          full_name?: string
          id?: string
          phone?: string | null
          primary_subject?: string | null
          role?: Database['public']['Enums']['user_role']
          updated_at?: string | null
        }
        Relationships: []
      }
      tutor_settings: {
        Row: {
          created_at: string | null
          id: string
          invite_slug: string | null
          notify_cancellations: boolean | null
          notify_lesson_reminders: boolean | null
          notify_new_students: boolean | null
          notify_payment_tracking: boolean | null
          notify_product_updates: boolean | null
          notify_weekly_summary: boolean | null
          tutor_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          invite_slug?: string | null
          notify_cancellations?: boolean | null
          notify_lesson_reminders?: boolean | null
          notify_new_students?: boolean | null
          notify_payment_tracking?: boolean | null
          notify_product_updates?: boolean | null
          notify_weekly_summary?: boolean | null
          tutor_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          invite_slug?: string | null
          notify_cancellations?: boolean | null
          notify_lesson_reminders?: boolean | null
          notify_new_students?: boolean | null
          notify_payment_tracking?: boolean | null
          notify_product_updates?: boolean | null
          notify_weekly_summary?: boolean | null
          tutor_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'tutor_settings_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: true
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'tutor_settings_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: true
            referencedRelation: 'student_card_details'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'tutor_settings_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: true
            referencedRelation: 'student_list_with_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'tutor_settings_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: true
            referencedRelation: 'student_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'tutor_settings_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: true
            referencedRelation: 'tutor_dashboard_stats'
            referencedColumns: ['tutor_id']
          },
        ]
      }
    }
    Views: {
      calendar_lessons: {
        Row: {
          day_of_week: number | null
          duration_minutes: number | null
          end_time: string | null
          group_id: string | null
          group_name: string | null
          hour_slot: number | null
          id: string | null
          lesson_status: Database['public']['Enums']['lesson_status'] | null
          payment_status: Database['public']['Enums']['payment_status'] | null
          start_time: string | null
          student_id: string | null
          student_name: string | null
          subject: string | null
          topic: string | null
          tutor_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'lessons_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'group_details_with_stats'
            referencedColumns: ['group_id']
          },
          {
            foreignKeyName: 'lessons_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'group_stats'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lessons_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'groups'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lessons_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'homework_list_with_files'
            referencedColumns: ['group_id']
          },
          {
            foreignKeyName: 'lessons_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'student_card_details'
            referencedColumns: ['group_id']
          },
          {
            foreignKeyName: 'lessons_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lessons_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'student_card_details'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'student_list_with_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'student_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'tutor_dashboard_stats'
            referencedColumns: ['tutor_id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_card_details'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_list_with_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'tutor_dashboard_stats'
            referencedColumns: ['tutor_id']
          },
        ]
      }
      group_details_with_stats: {
        Row: {
          active_students_count: number | null
          completed_lessons: number | null
          created_at: string | null
          default_lesson_price: number | null
          description: string | null
          group_id: string | null
          group_name: string | null
          invite_token: string | null
          max_students: number | null
          next_lesson_time: string | null
          pending_students_count: number | null
          subject: string | null
          total_lessons: number | null
          total_members: number | null
          tutor_avatar: string | null
          tutor_id: string | null
          tutor_name: string | null
          unpaid_lessons: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'groups_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'groups_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_card_details'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'groups_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_list_with_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'groups_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'groups_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'tutor_dashboard_stats'
            referencedColumns: ['tutor_id']
          },
        ]
      }
      group_members_detailed: {
        Row: {
          accepted_at: string | null
          group_id: string | null
          group_name: string | null
          invited_at: string | null
          lessons_in_group: number | null
          membership_id: string | null
          membership_status: Database['public']['Enums']['member_status'] | null
          next_lesson_time: string | null
          student_avatar: string | null
          student_id: string | null
          student_name: string | null
          student_phone: string | null
          subject: string | null
          tutor_id: string | null
          unpaid_lessons: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'group_members_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'group_details_with_stats'
            referencedColumns: ['group_id']
          },
          {
            foreignKeyName: 'group_members_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'group_stats'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'group_members_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'groups'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'group_members_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'homework_list_with_files'
            referencedColumns: ['group_id']
          },
          {
            foreignKeyName: 'group_members_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'student_card_details'
            referencedColumns: ['group_id']
          },
          {
            foreignKeyName: 'group_members_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'group_members_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'student_card_details'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'group_members_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'student_list_with_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'group_members_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'student_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'group_members_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'tutor_dashboard_stats'
            referencedColumns: ['tutor_id']
          },
          {
            foreignKeyName: 'groups_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'groups_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_card_details'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'groups_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_list_with_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'groups_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'groups_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'tutor_dashboard_stats'
            referencedColumns: ['tutor_id']
          },
        ]
      }
      group_stats: {
        Row: {
          active_students: number | null
          id: string | null
          name: string | null
          pending_students: number | null
          total_lessons: number | null
          tutor_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'groups_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'groups_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_card_details'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'groups_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_list_with_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'groups_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'groups_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'tutor_dashboard_stats'
            referencedColumns: ['tutor_id']
          },
        ]
      }
      homework_list_with_files: {
        Row: {
          completed_at: string | null
          created_at: string | null
          days_until_due: number | null
          description: string | null
          due_date: string | null
          files: Json | null
          files_count: number | null
          group_id: string | null
          group_name: string | null
          homework_id: string | null
          homework_status: string | null
          is_completed: boolean | null
          lesson_date: string | null
          lesson_id: string | null
          lesson_topic: string | null
          student_id: string | null
          student_name: string | null
          student_notes: string | null
          subject: string | null
          tutor_id: string | null
          tutor_name: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'lessons_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lessons_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'student_card_details'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'student_list_with_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'student_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'tutor_dashboard_stats'
            referencedColumns: ['tutor_id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_card_details'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_list_with_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'tutor_dashboard_stats'
            referencedColumns: ['tutor_id']
          },
        ]
      }
      lesson_history: {
        Row: {
          created_at: string | null
          day_of_week: string | null
          duration_minutes: number | null
          end_time: string | null
          end_time_formatted: string | null
          group_id: string | null
          group_name: string | null
          has_homework: boolean | null
          homework_completed: boolean | null
          homework_due_date: string | null
          homework_id: string | null
          lesson_date: string | null
          lesson_id: string | null
          lesson_status: Database['public']['Enums']['lesson_status'] | null
          notes: string | null
          payment_status: Database['public']['Enums']['payment_status'] | null
          price: number | null
          start_time: string | null
          start_time_formatted: string | null
          student_avatar: string | null
          student_id: string | null
          student_name: string | null
          subject: string | null
          topic: string | null
          tutor_avatar: string | null
          tutor_id: string | null
          tutor_name: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'lessons_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'group_details_with_stats'
            referencedColumns: ['group_id']
          },
          {
            foreignKeyName: 'lessons_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'group_stats'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lessons_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'groups'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lessons_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'homework_list_with_files'
            referencedColumns: ['group_id']
          },
          {
            foreignKeyName: 'lessons_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'student_card_details'
            referencedColumns: ['group_id']
          },
          {
            foreignKeyName: 'lessons_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lessons_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'student_card_details'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'student_list_with_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'student_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'tutor_dashboard_stats'
            referencedColumns: ['tutor_id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_card_details'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_list_with_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'tutor_dashboard_stats'
            referencedColumns: ['tutor_id']
          },
        ]
      }
      recent_activity: {
        Row: {
          activity_data: Json | null
          activity_text: string | null
          activity_time: string | null
          activity_type: string | null
          tutor_id: string | null
        }
        Relationships: []
      }
      student_card_details: {
        Row: {
          accepted_at: string | null
          avatar_url: string | null
          cancelled_lessons: number | null
          completed_lessons: number | null
          created_at: string | null
          group_id: string | null
          group_name: string | null
          invited_at: string | null
          last_lesson_time: string | null
          membership_status: Database['public']['Enums']['member_status'] | null
          next_lesson_time: string | null
          phone: string | null
          student_id: string | null
          student_name: string | null
          subject: string | null
          total_lessons: number | null
          tutor_id: string | null
          unpaid_amount: number | null
          unpaid_lessons_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_card_details'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_list_with_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'tutor_dashboard_stats'
            referencedColumns: ['tutor_id']
          },
        ]
      }
      student_list_with_stats: {
        Row: {
          group_ids: string[] | null
          group_names: string | null
          last_lesson_time: string | null
          membership_status: string | null
          next_lesson_time: string | null
          student_avatar: string | null
          student_id: string | null
          student_name: string | null
          student_phone: string | null
          student_since: string | null
          total_lessons: number | null
          tutor_id: string | null
          unpaid_lessons_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_card_details'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_list_with_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'tutor_dashboard_stats'
            referencedColumns: ['tutor_id']
          },
        ]
      }
      student_stats: {
        Row: {
          full_name: string | null
          groups_count: number | null
          student_id: string | null
          total_lessons: number | null
          unpaid_lessons: number | null
        }
        Relationships: []
      }
      tutor_dashboard_stats: {
        Row: {
          active_students: number | null
          lessons_this_week: number | null
          lessons_today: number | null
          total_groups: number | null
          tutor_id: string | null
          tutor_name: string | null
          unpaid_lessons: number | null
        }
        Relationships: []
      }
      upcoming_lessons_detailed: {
        Row: {
          duration_minutes: number | null
          end_time: string | null
          group_id: string | null
          group_name: string | null
          group_subject: string | null
          homework_completed: boolean | null
          homework_description: string | null
          homework_due_date: string | null
          homework_files_count: number | null
          homework_id: string | null
          lesson_id: string | null
          lesson_status: Database['public']['Enums']['lesson_status'] | null
          payment_status: Database['public']['Enums']['payment_status'] | null
          price: number | null
          start_time: string | null
          student_avatar: string | null
          student_id: string | null
          student_name: string | null
          topic: string | null
          tutor_avatar: string | null
          tutor_id: string | null
          tutor_name: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'lessons_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'group_details_with_stats'
            referencedColumns: ['group_id']
          },
          {
            foreignKeyName: 'lessons_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'group_stats'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lessons_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'groups'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lessons_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'homework_list_with_files'
            referencedColumns: ['group_id']
          },
          {
            foreignKeyName: 'lessons_group_id_fkey'
            columns: ['group_id']
            isOneToOne: false
            referencedRelation: 'student_card_details'
            referencedColumns: ['group_id']
          },
          {
            foreignKeyName: 'lessons_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lessons_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'student_card_details'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'student_list_with_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'student_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'tutor_dashboard_stats'
            referencedColumns: ['tutor_id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_card_details'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_list_with_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'student_stats'
            referencedColumns: ['student_id']
          },
          {
            foreignKeyName: 'lessons_tutor_id_fkey'
            columns: ['tutor_id']
            isOneToOne: false
            referencedRelation: 'tutor_dashboard_stats'
            referencedColumns: ['tutor_id']
          },
        ]
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      lesson_status: 'scheduled' | 'completed' | 'cancelled'
      member_status: 'pending' | 'active' | 'archived'
      payment_status: 'paid' | 'unpaid'
      user_role: 'tutor' | 'student'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, '__InternalSupabase'>

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, 'public'>]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] &
        DefaultSchema['Views'])
    ? (DefaultSchema['Tables'] &
        DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema['Enums']
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema['CompositeTypes']
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {
      lesson_status: ['scheduled', 'completed', 'cancelled'],
      member_status: ['pending', 'active', 'archived'],
      payment_status: ['paid', 'unpaid'],
      user_role: ['tutor', 'student'],
    },
  },
} as const
